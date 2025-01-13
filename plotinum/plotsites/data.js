// Request the plot you want to view
var plotid = prompt("What is the plot you want to view?", "Any registered plot ID")
// Get the data from Supabase
// Init a spuabase (amazing spelling) client
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ioqyyizmfzdldbolttdp.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
// Get the thing... i keep forgetting- oh yeah the data
const { data, error } = await supabase
  .from('plots')
  .select()
  .eq('plotid', plotid)
const recievedJson = data;
  // Debugging
document.getElementById("rawjson").innerHTML = JSON.stringify(receivedJson, null, 2);
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