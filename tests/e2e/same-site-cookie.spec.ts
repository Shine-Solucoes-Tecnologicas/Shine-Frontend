import { expect, test } from '@playwright/test'
import http, { type Server } from 'node:http'

const probes = new Map<string, boolean>()
let pageServer: Server
let apiServer: Server

const listen = (server: Server, port: number, host: string) => new Promise<void>((resolve) => {
  server.listen(port, host, resolve)
})

const close = (server: Server) => new Promise<void>((resolve, reject) => {
  server.closeAllConnections()
  server.close((error) => error ? reject(error) : resolve())
})

test.beforeAll(async () => {
  pageServer = http.createServer((_request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.writeHead(200).end('<!doctype html><title>Cookie policy test</title>')
  })

  apiServer = http.createServer((request, response) => {
    const host = request.headers.host?.split(':')[0] ?? 'unknown'

    if (request.url === '/session') {
      response.setHeader('Set-Cookie', 'Shine.Refresh=browser-secret; HttpOnly; SameSite=Lax; Path=/')
      response.writeHead(200).end('session created')
      return
    }

    if (request.url?.startsWith('/probe')) {
      probes.set(host, request.headers.cookie?.includes('Shine.Refresh=') ?? false)
      response.setHeader('Content-Type', 'image/gif')
      response.writeHead(200).end(Buffer.from('R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=', 'base64'))
      return
    }

    response.writeHead(404).end()
  })

  await Promise.all([
    listen(pageServer, 4173, 'localhost'),
    listen(apiServer, 4174, '0.0.0.0'),
  ])
})

test.afterAll(async () => {
  await Promise.all([close(pageServer), close(apiServer)])
})

test('SameSite=Lax refresh cookie is sent same-site and withheld cross-site', async ({ page }) => {
  await page.goto('http://localhost:4174/session')
  await page.goto('/')
  await page.evaluate(() => new Promise<void>((resolve) => {
    const probe = new Image()
    probe.onload = () => resolve()
    probe.onerror = () => resolve()
    probe.src = `http://localhost:4174/probe?same-site=${Date.now()}`
  }))

  await page.goto('http://127.0.0.1:4174/session')
  await page.goto('/')
  await page.evaluate(() => new Promise<void>((resolve) => {
    const probe = new Image()
    probe.onload = () => resolve()
    probe.onerror = () => resolve()
    probe.src = `http://127.0.0.1:4174/probe?cross-site=${Date.now()}`
  }))

  expect(probes.get('localhost')).toBe(true)
  expect(probes.get('127.0.0.1')).toBe(false)
})
