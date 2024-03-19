# Frontend Performance Homework (Online shop website template)

This assignment focuses on enhancing the performance of an online shop website, based on the [Multishop Free Website](https://www.free-css.com/free-css-templates/page280/multishop) template.

## Optimizations

The following optimizations were made:

### Minification of assets

Both CSS and JavaScript assets were minified using `vite`, which handles this out of the box. For these, the project files were reorganized to define which js files were going to be bundled, as some of the files are already minified dependencies. Every file that contains the `.min.js` extension was excluded from the build process and moved to the `public` folder, the rest are minified as part of the build process.

For image assets, the `vite-plugin-image-optimizer` was used to compress the images at build time.

### Lazy loading of images

Images that are currently not visible on the screen are deferred from loading. This is done via the `loading="lazy"` attribute.

### Defer scripts

The scripts are deferred to avoid render blocking of the page and keep the order of its execution. This is done via the `defer` attribute.

### Notes

- It already ensures fonts are preloaded (preconnect to https://fonts.gstatic.com).

- It already uses CDN's for some of the assets.
