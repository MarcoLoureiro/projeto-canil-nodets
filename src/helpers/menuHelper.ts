type MenuOptions = "" | "all" | "dogs" | "cats" | "fishes" ;


export const alternateMenu = (option:MenuOptions) =>{
    let activeOption = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };

    if(option !==""){
        activeOption[option] = true;
    };

    return activeOption;
}
