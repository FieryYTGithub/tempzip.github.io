import supabase from '/supabasetesting/getdata/startclient.js'

const getdata = async (params) {
  
}() => {
  const { data, error } = await supabase
  .from('definetly a real table')
  .select()

  if (error) {
    console.error(error)
  }
  if (data) {
    console.log(data)
  }
}

call getdata();