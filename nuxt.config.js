module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  components: true,
  plugins: ['~/plugins/socket.client.js', '~/plugins/progress.js'],
  head: {
    link: [{
      rel: 'stylesheet',
      type: 'text/css',
      href: '/css/nprogress.css'
    }, {
      rel: 'stylesheet',
      type: 'text/css',
      href: '/css/loadIndicator.css'
    },
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css",
      rel: "stylesheet", 
      integrity: "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl", 
      crossorigin: "anonymous"
    }]
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
  auth: {
   strategies: {
    discord: {
      clientId: '987999554177757236',
      clientSecret: '1oio16Bff1aEcNeoFrPCKIpw4EyoZAUy',
      codeChallengeMethod: '',
      grantType: 'authorization_code',
      scope: ['email', 'identify']
    },
  },
   redirect: {
    login: '/login',
    logout: '/',
    callback: '/login',
    home: '/'
  }
  }
}