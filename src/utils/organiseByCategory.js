
export const organiseByCategory=(movies) =>{

    const grouped = {}

    movies.forEach(movie => {
        let cat = movie.category;

        if(!cat || cat.trim() == "" || cat.trim().toLowerCase() == "undefined"){
            cat = "Other"
        }
        cat = cat.trim()
        cat = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()


        if(!grouped[cat]){
            grouped[cat]=[]
        }

        grouped[cat].push(movie)
        
    });
    
  return grouped
  
}

