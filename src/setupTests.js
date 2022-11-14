import 'whatwg-fetch'
import matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'
import { server } from './mocks/server.js'
import { beforeAll, afterEach, afterAll } from 'vitest'

// https://github.com/testing-library/jest-dom/issues/439
// same as: import '@testing-library/jest-dom/extend-expect'
expect.extend(matchers)


// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())
