(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{VFHL:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return c}));var n=t("q1tI"),r=t.n(n),i=t("tsJN"),s=t("cPnb"),l=t("E00f"),o=t("v0M6"),c="2832796411";a.default=function(e){var a=e.data,t=e.pageContext,n=e.path,c=t.currentPage,m=t.hasNextPage,u=t.hasPrevPage,d=t.prevPagePath,g=t.nextPagePath,P=a.allMarkdownRemark.edges,v=c>0?"Courses - Page "+c:"Courses";return r.a.createElement(i.a,{title:v,slug:n},r.a.createElement(l.a,null,r.a.createElement(s.a,{edges:P}),r.a.createElement(o.a,{prevPagePath:d,nextPagePath:g,hasPrevPage:u,hasNextPage:m})))}},cPnb:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=t("l5a8"),s=(t("FhEL"),function(e){var a=e.edges;return e.isHorizontal?r.a.createElement("div",{className:"CourseList--isHorizontal"},a.map((function(e){return r.a.createElement("div",{className:"CourseList-card",key:e.node.fields.slug},r.a.createElement("div",{className:"CourseList-itemTitle"},r.a.createElement(i.a,{variation:"primary",path:e.node.fields.slug},e.node.frontmatter.title)),r.a.createElement(i.a,{variation:"pill",path:e.node.fields.slug},"Go Learn"))}))):r.a.createElement("div",{className:"CourseList"},a.map((function(e){return r.a.createElement("div",{className:"CourseList-item",key:e.node.fields.slug},r.a.createElement(i.a,{variation:"tertiary",path:e.node.fields.categorySlug},e.node.frontmatter.category),r.a.createElement("div",{className:"CourseList-itemTitle"},r.a.createElement(i.a,{variation:"primary",path:e.node.fields.slug},e.node.frontmatter.title)),r.a.createElement("p",{className:"CourseList-itemDescription"},e.node.frontmatter.description),r.a.createElement(i.a,{variation:"pill",path:e.node.fields.slug},"Go Learn"))})))});t.d(a,"a",(function(){return s}))},v0M6:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=t("Wbzz"),s=t("WlAH"),l=(t("UYo0"),function(e){var a=e.prevPagePath,t=e.nextPagePath,n=e.hasNextPage,l=e.hasPrevPage;return r.a.createElement("div",{className:"Pagination"},l&&r.a.createElement("div",{className:"Pagination-prev"},r.a.createElement(i.Link,{rel:"prev",to:a,className:"Pagination-prev-link"},s.b.PREV_PAGE)),n&&r.a.createElement("div",{className:"Pagination-next"},r.a.createElement(i.Link,{rel:"next",to:t,className:"Pagination-next-link"},s.b.NEXT_PAGE)))});t.d(a,"a",(function(){return l}))}}]);
//# sourceMappingURL=component---src-templates-course-list-template-js-55a4da5f502c537d5686.js.map