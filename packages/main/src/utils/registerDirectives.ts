import type { App, Directive } from 'vue'

/**
 *
 * @param app
 * @param directives register directives
 */
export default function registerDirectives(app: App, directives: Record<string, Directive>) {
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key])
  })
}
