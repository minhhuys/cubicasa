
const mixin = {
  methods: {
    $_uploadImage_readImage(file) {
      return new Promise((resolve, reject) => {
        const imgValidate = this.$_uploadImage_validate(file.type)
        if (!imgValidate) {
          alert('File type is not supported')
          reject(Error)
        }
        if (typeof FileReader === 'function') {
          const reader = new FileReader()
          reader.onload = (event) => {
            const imgSrc = event.target.result
            resolve(imgSrc)
          }
          reader.readAsDataURL(file)
        } else {
          alert('Sorry, FileReader API not supported')
          reject(Error)
        }
      })
    },

    $_uploadImage_validate(fileType) {
      return fileType.includes('image/')
    },

    $_uploadImage_resizeImage(originalFile) {
      return new Promise((resolve, reject) => {
        if (
          window.File &&
          window.FileReader &&
          window.FileList &&
          window.Blob
        ) {
          var file = originalFile
          if (file) {
            var reader = new FileReader()
            // Set the image once loaded into file reader
            reader.onload = function(e) {
              var img = document.createElement('img')
              img.src = e.target.result

              var canvas = document.createElement('canvas')
              var ctx = canvas.getContext('2d')
              ctx.drawImage(img, 0, 0)

              var MAX_WIDTH = 500
              var MAX_HEIGHT = 500
              var width = img.width
              var height = img.height

              if (width > height) {
                if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width
                  width = MAX_WIDTH
                }
              } else {
                if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height
                  height = MAX_HEIGHT
                }
              }
              canvas.width = width
              canvas.height = height
              ctx = canvas.getContext('2d')
              ctx.drawImage(img, 0, 0, width, height)

              let dataUrl = canvas.toDataURL('image/png')
              resolve(dataUrl)
            }
            reader.readAsDataURL(file)
          }
        } else {
          alert('The File APIs are not fully supported in this browser.')
          reject(Error)
        }
      })
    },
  },
}

export default mixin
