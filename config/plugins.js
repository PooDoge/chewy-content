module.exports = () => ({
  upload: {
      config: {
        provider: "strapi-provider-upload-ipfs-storage",
        providerOptions: {
          defaultStorage: "filebase",
          filebase: {
            // https://console.filebase.com/keys
            key: env("FILEBASE_KEY"),
            secret: env("FILEBASE_SECRET"),
            bucket: env("FILEBASE_BUCKET"),
          },
          pinata: {
            // https://app.pinata.cloud/keys
            jwt: env("PINATA_JWT"),
          },
          fleek: {
            // https://app.fleek.co/#/settings/general/profile
            key: env("FLEEK_KEY"),
            secret: env("FLEEK_SECRET"),
            bucket: env("FLEEK_BUCKET"),
          },
          web3: {
            // https://web3.storage/tokens/
            token: env("WEB3_TOKEN"),
          },
          lighthouse: {
            // https://files.lighthouse.storage/dashboard/apikey
            token: env("LIGHTHOUSE_TOKEN"),
          },
        },
      },
    },
});
