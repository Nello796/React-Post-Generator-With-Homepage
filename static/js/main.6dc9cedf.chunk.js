(this["webpackJsonpfacebook-post"]=this["webpackJsonpfacebook-post"]||[]).push([[0],{10:function(e,t,a){e.exports=a(27)},16:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),l=a.n(s),m=(a(15),a(16),a(9)),r=a(1),c=a(2),i=a(4),u=a(3),p=a(6),d=a.n(p),h=a(5),f=a.n(h),v=(a(24),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleChangeTextarea=function(t){e.setState({value:t.target.value}),e.state.value.length>=50?document.getElementById("test").style.fontSize="1.6rem":document.getElementById("test").style.fontSize="2rem"},e.handleSubmit=function(t){t.preventDefault(),e.props.addPost(e.state.value),e.setState({value:""})},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"post-generator-wrap"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"insert-post-section"},o.a.createElement("div",null,o.a.createElement("img",{src:f.a,className:"profile-picture",alt:"Profile"})),o.a.createElement("div",null,o.a.createElement(d.a,{id:"test",className:"text-area-autosize-post",name:"text-post",placeholder:"What are you thinking, Fabion ?",value:this.state.value,onChange:this.handleChangeTextarea}))),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",className:"btn-post"},"Post"))))}}]),a}(o.a.Component)),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).handleLike=function(){return e.props.isLiked?e.props.handleLikes(-1,!1,e.props.id):e.props.handleLikes(1,!0,e.props.id)},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"main-wrap-post"},o.a.createElement("div",{className:"account-info"},o.a.createElement("div",null,o.a.createElement("img",{src:f.a,className:"profile-picture",alt:"Profile"})),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement("a",null,this.props.name)),o.a.createElement("small",null,this.props.time," . ",o.a.createElement("i",{className:"fas fa-globe-africa"})))),o.a.createElement("div",{className:"post-content"},o.a.createElement("pre",null,this.props.postContent)),o.a.createElement("div",{className:"post-info"},o.a.createElement("div",null,0!==this.props.like?o.a.createElement("div",null,o.a.createElement("i",{className:"fas fa-thumbs-up"}),o.a.createElement("p",null,this.props.like)):null),o.a.createElement("div",null,o.a.createElement("p",null,this.props.comments.length," Comments"),o.a.createElement("p",null,this.props.share," Shares"),o.a.createElement("p",null,this.props.view," Views"))),o.a.createElement("div",{className:"menu-interaction"},o.a.createElement("div",{onClick:this.handleLike,className:this.props.isLiked?"blue_color":null},o.a.createElement("i",{className:"far fa-thumbs-up"}),"Like"),o.a.createElement("div",null,o.a.createElement("i",{className:"far fa-comment-alt"})," Comment"),o.a.createElement("div",null,o.a.createElement("i",{className:"fas fa-share"})," Share")))}}]),a}(o.a.Component),k=(a(25),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={comment_tool_menu:""},e.toggleCommentToolMenu=function(){0===e.state.comment_tool_menu.length?e.setState((function(e){return{comment_tool_menu:e.comment_tool_menu="show-comment-tool-menu"}})):e.setState((function(e){return{comment_tool_menu:e.comment_tool_menu=""}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"comment-wrap"},o.a.createElement("div",null,o.a.createElement("img",{src:f.a,className:"profile-picture-comments",alt:"Profile"})),o.a.createElement("div",{className:"comment"},o.a.createElement("div",null,o.a.createElement("pre",null,o.a.createElement("span",null,this.props.comments.name),this.props.comments.commentContent),o.a.createElement("div",{className:"comment-tool-menu-wrap"},o.a.createElement("i",{id:"btn-open-comment-tool-menu",className:"fas fa-ellipsis-h",onClick:this.toggleCommentToolMenu}),o.a.createElement("div",{id:"comment-tool-menu",className:this.state.comment_tool_menu},o.a.createElement("p",null,o.a.createElement("i",{className:"fas fa-pen"})," Edit"),o.a.createElement("p",{onClick:function(){return e.props.removeComment(e.props.postID,e.props.id)}},o.a.createElement("i",{className:"fas fa-trash"})," Delete")))),o.a.createElement("div",{className:"comment-menu-option"},o.a.createElement("p",null,"Like"),o.a.createElement("span",null,"."),o.a.createElement("p",null,"Comment"),o.a.createElement("span",null," . "),o.a.createElement("span",null,"Undefined"))))}}]),a}(o.a.Component)),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleComment=function(t){e.setState({value:t.target.value})},e.handleKeyPress=function(t){"Enter"===t.key&&t.preventDefault(),"Enter"===t.key&&""!==e.state.value&&(e.props.addComment(e.state.value,e.props.id),e.setState((function(e){return{value:""}})))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main-wrap-comments"},this.props.comments.map((function(t,a){return o.a.createElement(k,{key:a.toString(),id:a,postID:e.props.id,comments:t,removeComment:e.props.removeComment})})),o.a.createElement("form",{className:"add-comment-form"},o.a.createElement("div",null,o.a.createElement("img",{src:f.a,className:"profile-picture-comments",alt:"Profile"}),o.a.createElement(d.a,{className:"text-area-autosize-comment",onChange:this.handleComment,onKeyPress:this.handleKeyPress,value:this.state.value,placeholder:"Write a comment..."}))))}}]),a}(o.a.Component),b=(a(26),function(e){return o.a.createElement("article",{className:"article"},o.a.createElement(E,{id:e.id,name:e.name,time:e.time,postContent:e.postContent,like:e.like,comments:e.comments,share:e.share,view:e.view,isLiked:e.isLiked,handleLikes:e.handleLikes}),o.a.createElement(C,{comments:e.comments,addComment:e.addComment,removeComment:e.removeComment,id:e.id}))}),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={postList:[]},e.addPost=function(t){e.setState((function(e){return{postList:[{name:"Fabion Delishaj",postContent:t,time:"Undefined",like:0,isLiked:!1,isShareLiked:!1,comments:[],share:0,view:0}].concat(Object(m.a)(e.postList))}}))},e.addComment=function(t,a){e.setState((function(e){return{comments:e.postList[a].comments.push({name:"Fabion Delishaj",commentContent:t})}}))},e.removeComment=function(t,a){var n=e.state.postList[t].comments;n.splice(a,1),e.setState((function(e){return{comments:n}}))},e.handleLikes=function(t,a,n){e.setState((function(e){return{like:e.postList[n].like+=t,isLiked:e.postList[n].isLiked=!e.postList[n].isLiked}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"app"},o.a.createElement(v,{addPost:this.addPost}),o.a.createElement("section",{className:"main-section"},this.state.postList.map((function(t,a){return o.a.createElement(b,{key:a.toString(),id:a,name:t.name,postContent:t.postContent,time:t.time,like:t.like,comments:t.comments,share:t.share,view:t.view,isLiked:t.isLiked,addComment:e.addComment,removeComment:e.removeComment,handleLikes:e.handleLikes})}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a.p+"static/media/profile-picture.4d9c5ba4.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.6dc9cedf.chunk.js.map