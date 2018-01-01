export default {
  getSiteProps: () => ({
    title: 'just Do It',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/routes/index',
    },
    {
      is404: true,
      component: 'src/routes/404',
    },
  ],
}
