// Parse the JSON, parse it NOW.
const obj = JSON.parse('{"id":9066, "name":"Wallrunning", "owner":"__Fiery", "node":"1", "tags":"Parkour, Roleplay, Miscellaneous", "icon":"Reinforced_Deepslate"}'); // DF needs this. I dont wanna use templates

// Do the tab appearance
const favicon = document.getElementById("favicon")
favicon.href = "https://minecraft.wiki/images/Invicon_" + obj.icon + ".png";
document.getElementById("plotnametabtitle").innerHTML = obj.name + " - Plotinum"

// Add the text elements
document.getElementById("plotnamebig").innerHTML = obj.name + " (" + obj.id + ")";
document.getElementById("plotname").innerHTML =  "Plot Name: "+ obj.name;
document.getElementById("owner").innerHTML = "Owner: "+ obj.owner;
document.getElementById("node").innerHTML = "Node: "+ obj.node;
document.getElementById("tags").innerHTML = "Tags: "+ obj.tags
const image = document.getElementById("icon");
image.src = "https://minecraft.wiki/images/Invicon_" + obj.icon + ".png";