// const path = require('path')
//
// exports.createPages = ({ graphql, actions }) => {
//
//   const { createPage } = actions;
//
//   const articlePost = path.resolve('src/templates/article-post.js')
//
//   return graphql(
//     `
//       {
//         allContentfulAtricle {
//           nodes {
//             title
//             content {
//               raw
//               references {
//                 ... on ContentfulAsset {
//                   contentful_id
//                   fixed(width: 1600) {
//                     width
//                     height
//                     src
//                     srcSet
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }
//
//     const articles = result.data.allContentfulAtricle.nodes;
//
//     articles.forEach((post, index) => {
//       const previous = index === articles.length - 1 ? null : articles[index + 1].node
//       const next = index === 0 ? null : articles[index - 1].node
//
//       createPage({
//         path: post.title,
//         component: articlePost,
//         context: {
//           title: post.node.title,
//           content: post.node.content.raw,
//           previous,
//           next
//         }
//       })
//     })
//   })
//
// }
