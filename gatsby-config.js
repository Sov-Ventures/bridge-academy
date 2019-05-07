module.exports = {

  plugins: [

  {
     resolve: "gatsby-plugin-react-helmet", 
   options: { 
     navigateFallback: null, 
     navigateFallbackWhitelist: [], 
   }
  },

  {
     resolve: "gatsby-plugin-twitter", 
   options: { 
     navigateFallback: null, 
     navigateFallbackWhitelist: [], 
   }
  },
 {
        resolve: "gatsby-plugin-segment-js",
        options: {
            // your segment write key for your production environment
            // when process.env.NODE_ENV === 'production'
            // required; non-empty string
            prodKey: `RkOVgrq95SpTAxLiircyuR5jvQ29jC8j`,

            // if you have a development env for your segment account, paste that key here
            // when process.env.NODE_ENV === 'development'
            // optional; non-empty string
            //devKey: `SEGMENT_DEV_WRITE_KEY`,

            // boolean (defaults to false) on whether you want
            // to include analytics.page() automatically
            // if false, see below on how to track pageviews manually
            trackPage: true
        }
    }

  ],
}
