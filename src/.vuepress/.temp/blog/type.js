      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,0,8,7,6,17,18,9,10,11,12,15,16,19,1,2,5,3,4,14]}},"star":{"/":{"path":"/star/","indexes":[9,13,15,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[13,8,7,6,17,18,9,10,11,12,15,16,0]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      