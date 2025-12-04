
    const tabs = document.querySelector('.tabs');
    const tabButtons = tabs.querySelectorAll('[role="tab"]');
    const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

    

    function handleTabClick(e) {
        //hide all tab panels
        console.log(tabPanels);
        tabPanels.forEach(function(panel){
            panel.hidden=true
        });
        
        //make all tabs as unselected 
        tabButtons.forEach(tab=>{
            tab.ariaSelected=false;
            tab.setAttribute('aria-selected',false);
        })

        //mark this tab as selected 
        e.currentTarget.setAttribute('aria-selected',true)

        //find the associated tabpanel and show it 
        const {id} = e.currentTarget;

        //method 1
        // const tabpanel=tabs.querySelector(`[aria-labelledby="${id}"]`);
        // tabpanel.hidden=false;

        //method 2
        
        tabPanels.find();
        

    }

    tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

/*
| Letter | Meaning                    |
| ------ | -------------------------- |
| **B**  | Brackets `()`              |
| **O**  | Orders (powers, exponents) |
| **D**  | Division `/`               |
| **M**  | Multiplication `*`         |
| **A**  | Addition `+`               |
| **S**  | Subtraction `-`            |

*/