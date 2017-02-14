      //<![CDATA[

      // Related Post Script
        var relatedTitles=[],relatedTitlesNum=0,relatedUrls=[],thumburl=[]; function related_results_labels_thumbs(f){for(var e=0;e<f.feed.entry.length;e++){var g=f.feed.entry[e];relatedTitles[relatedTitlesNum]=g.title.$t;try{thumburl[relatedTitlesNum]=g.media$thumbnail.url}catch(h){s=g.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),thumburl[relatedTitlesNum]=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"undefined"!==typeof defaultnoimage?defaultnoimage:"http://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg"}120<relatedTitles[relatedTitlesNum].length&& (relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,120)+"...");for(var k=0;k<g.link.length;k++)"alternate"==g.link[k].rel&&(relatedUrls[relatedTitlesNum]=g.link[k].href,relatedTitlesNum++)}} function removeRelatedDuplicates_thumbs(){for(var f=[],e=[],g=[],h=0;h<relatedUrls.length;h++)contains_thumbs(f,relatedUrls[h])||(f.length+=1,f[f.length-1]=relatedUrls[h],e.length+=1,g.length+=1,e[e.length-1]=relatedTitles[h],g[g.length-1]=thumburl[h]);relatedTitles=e;relatedUrls=f;thumburl=g}function contains_thumbs(f,e){for(var g=0;g<f.length;g++)if(f[g]==e)return!0;return!1} function printRelatedLabels_thumbs(f){for(var e=0;e<relatedUrls.length;e++)relatedUrls[e]!=f&&relatedTitles[e]||(relatedUrls.splice(e,1),relatedTitles.splice(e,1),thumburl.splice(e,1),e--);f=Math.floor((relatedTitles.length-1)*Math.random());e=0;0<relatedTitles.length&&document.write("<h2>"+relatedpoststitle+"</h2>");for(document.write('<div style="clear: both;"/>');e<relatedTitles.length&&20>e&&e<maxresults;)document.write('<a style="text-decoration:none;'),document.write('"'),document.write(' href="'+ relatedUrls[f]+'"><img src="'+thumburl[f].replace("/s72-c/","/w225-h120-c/")+'"/><div class="relatedTitles">'+relatedTitles[f]+"</div></a>"),e++,f<relatedTitles.length-1?f++:f=0;document.write("</div>");relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)};

      // Read More Script
            function removeHtmlTag(strx,chop){
        if(strx.indexOf("<")!=-1)
        {
          var s = strx.split("<");
          for(var i=0;i<s.length;i++){
            if(s[i].indexOf(">")!=-1){
              s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
            }
          }
          strx = s.join("");
        }
        chop = (chop < strx.length-1) ? chop : strx.length-2;
        while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
        strx = strx.substring(0,chop-1);
        return strx+'...';
      }
      function createSummary(pID){ var div = document.getElementById(pID); var summ = 150; var summary = '<div><p>' + removeHtmlTag(div.innerHTML,summ) + '</div></p>'; div.innerHTML = summary; } 

      //Featured Post Widget
function mycallfeatured(c){for(var a=0;a<c.feed.entry.length;a++){for(var d=0;d<c.feed.entry[a].link.length;d++)if("alternate"==c.feed.entry[a].link[d].rel){var e=c.feed.entry[a].link[d].href;break}d="";if("category"in c.feed.entry[a]){for(var b=0;b<c.feed.entry[a].category.length;b++)d+='<a href="/search/label/'+c.feed.entry[a].category[b].term+'?&max-results=7">'+c.feed.entry[a].category[b].term+"</a> \u2192 "; b=d.lastIndexOf(" \u2192 ");-1!=b&&(d=d.substring(0,b))}var b=c.feed.entry[a].published.$t,f=b.substring(0,4),g=b.substring(5,7),b=b.substring(8,10),h=c.feed.entry[a].title.$t,k=c.feed.entry[a].author[0].name.$t,d="<a href="+e+'><div class="po_img"><img src="'+c.feed.entry[a].media$thumbnail.url.replace("/s72-c/","/s250-h200-c/")+'"/></div><div class="fea_con"><div class="fea_ribbon"><span>Ribbon</span></div></a><div class="tune">Tags: '+d+"</div><div class='reftitle'><h2><a href="+e+">"+h+'</a></h2></div><div class="date-header">By <font style="font-weight:bold;">'+ k+"</font> \u2192 "+[,"January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(g,10)]+" "+b+", "+f+"</div></div>";document.write(d)}};

      //Recent Post Widget Part1
function myrecent(c){for(var b=0;b<c.feed.entry.length;b++){for(var a=0;a<c.feed.entry[b].link.length;a++)if("alternate"==c.feed.entry[b].link[a].rel){var d=c.feed.entry[b].link[a].href;break}var a=c.feed.entry[b].published.$t,f=a.substring(0,4),g=a.substring(5,7),a=a.substring(8,10),e=c.feed.entry[b].category[0].term,h=c.feed.entry[b].title.$t,a='<div class="po_content"><div class="po_img"><a href='+d+'><img src="'+c.feed.entry[b].media$thumbnail.url.replace("/s72-c/","/s110-h85-c/")+'"/></a></div><div class="fea_con"><div class="tune"><a href="/search/label/'+ e+'?&max-results=7">'+e+"</a></div><h3><a href="+d+">"+h+'</a></h3><div class="date-header">'+[,"January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(g,10)]+" "+a+", "+f+"</div></div></div>";document.write(a)}};

      //Recent Post Widget Part2
function myrecenta(c){for(var b=0;b<c.feed.entry.length;b++){for(var a=0;a<c.feed.entry[b].link.length;a++)if("alternate"==c.feed.entry[b].link[a].rel){var d=c.feed.entry[b].link[a].href;break}var a=c.feed.entry[b].published.$t,f=a.substring(0,4),g=a.substring(5,7),a=a.substring(8,10),e=c.feed.entry[b].category[0].term,h=c.feed.entry[b].title.$t,a='<div class="po_content"><div class="po_img"><a href='+d+'><img src="'+c.feed.entry[b].media$thumbnail.url.replace("/s72-c/","/s110-h85-c/")+'"/></a></div><div class="fea_con"><div class="t-tune"><a href="/search/label/'+ e+'?&max-results=7">'+e+"</a></div><h3><a href="+d+">"+h+'</a></h3><div class="date-header">'+[,"January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(g,10)]+" "+a+", "+f+"</div></div></div>";document.write(a)}};

//]]>