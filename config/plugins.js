module.exports = () => ({
    graphql: {
      enabled: true,
      config: {
        endpoint: "/graphql",
        playgroundAlways: true,
        defaultLimit: 10,
        maxLimit: 20,
        apolloServer: {
          introspection: true,
          tracing: true,
        },
      },
    },
  });