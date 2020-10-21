export const initFbsdk = () => {
  return new Promise(resolve => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '977577506079007',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      })
    }(function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = '//connect.facebook.net/en_US/all.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  })
}