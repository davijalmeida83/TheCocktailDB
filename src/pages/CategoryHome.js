import React from "react";
import CocktailCategoryList from '../components/CocktailCategoryList'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

export default function CategoryHome() {
    const [loading, setLoading] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState("")
    const [cocktailCategories, setCocktailCategories] = React.useState([])

    React.useEffect(()=>{
        setLoading(true)
        async function getDrinks() {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
                const data = await response.json()          

                const drinkCategories = data.drinks
                if (drinkCategories) {
                    const newCocktailCategories = drinkCategories.map(item => {
                        const {strCategory} = item
                        return {id:strCategory, 
                                name:strCategory}
                       
                    }) 
                    setCocktailCategories(newCocktailCategories)
                } else {
                    setCocktailCategories([])
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
                    setCocktailCategories(newCocktails)
                } else {
                    setCocktailCategories([])
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

        if (searchTerm !== ''){
            getSearchDrinks();
        }else{
            getDrinks();
        } 

    }, [searchTerm])


    if (searchTerm !== ''){
        return (
            <main>
                <SearchForm setSearchTerm={setSearchTerm} />
                <CocktailList loading={loading} categoryName={cocktailCategories.categoryName} cocktails={cocktailCategories} />                
            </main>
            )
    }

    return (
    <main>
        <SearchForm setSearchTerm={setSearchTerm} />    
        <CocktailCategoryList loading={loading} cocktailCategories={cocktailCategories} />
    </main>
    )
}
