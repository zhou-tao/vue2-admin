import { AppTheme, MenuLayout } from '@/enums'

const state = {
  title: 'Vue2 Admin',
  theme: AppTheme.LIGHT,
  showProgress: true,
  showBreadcrumb: true,
  showPageTab: true,
  showPageTransition: true,
  showFooter: true,
  menuCollapsed: false,
  menuLayout: MenuLayout.VERTICAL,
  visitedViews: []
}

const actions = {
  addVisitedView({ state }, route) {
    if (state.visitedViews.some(v => v.path === route.path)) return
    state.visitedViews.push(route)
  },
  deleteVisitedView({ state }, route) {
    const targetIndex = state.visitedViews.findIndex(v => v.path === route.path)
    if (targetIndex > -1) state.visitedViews.splice(targetIndex, 1)
  },
  setVisitedView() {},
  toggleCollapse({ state }) {
    state.menuCollapsed = !state.menuCollapsed
  }
}

export default {
  namespaced: true,
  state,
  actions
}
