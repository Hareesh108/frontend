
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "solid-js": async () => {
          let pkg = await import("__mf__virtual/SolidModFed__prebuild__solid_mf_2_js__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "solid-js": {
            name: "solid-js",
            version: "1.9.5",
            scope: ["default"],
            loaded: false,
            from: "SolidModFed",
            async get () {
              usedShared["solid-js"].loaded = true
              const {"solid-js": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.9.4"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      