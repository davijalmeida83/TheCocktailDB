import React from "react";
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useParams } from "react-router-dom"

export default function DrinksHome() {
    const { category } = useParams()
    const [loading, setLoading] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState("")
    const [cocktails, setCocktails] = React.useState([])

    
    const objCategory = JSON.parse(decodeURIComponent(category)) ;

    React.useEffect(()=>{  
       
        setLoading(true)

        async function getDrinks() {
            try {         
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${ objCategory.name }`)
                const data = await response.json()
                const {drinks} = data
                if (drinks) {
                    const newCocktails = drinks.map(item => {
                        const {
                                idDrink, 
                                strDrink, 
                                strDrinkThumb
                              } = item
                        return {
                                id:idDrink, 
                                name:strDrink, 
                                image:strDrinkThumb
                               }
                       
                    }) 
                    setCocktails(newCocktails)
                } else {
                    setCocktails([])
                }
            } catch(error) {
                console.log(error)
            }
            setLoading(false)
        }


        async function getSearchDrinks() {
            try {         
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                const data = await response.json()
                const {drinks} = data
                if (drinks) {
                    const newCocktails = drinks.map(item => {
                        const {
                                idDrink, 
                                strDrink, 
                                strDrinkThumb
                              } = item
                        return {
                                id:idDrink, 
                                name:strDrink, 
                                image:strDrinkThumb
                               }
                       
                    }) 
                    setCocktails(newCocktails)
                } else {
                    setCocktails([])
                }
            } catch(error) {
                console.log(error)
            }
            setLoading(false)
        }
        if (searchTerm !== ''){
            getSearchDrinks();
        }else{
            getDrinks();
        }       
       
        
    }, [searchTerm, objCategory.name])

    return (
    <main>
        <SearchForm setSearchTerm={setSearchTerm} />
        <CocktailList loading={loading} categoryName={objCategory.name} cocktails={cocktails} />
    </main>
    )
}
