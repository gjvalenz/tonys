<script>
    const table_header_class = 'border border-slate-600 bg-slate-100'
    const table_elem_class = 'border border-slate-600 bg-white'
</script>

<div class='flex flex-col mt-12 mb-20'>
    <p class='font-bold text-4xl text-main-300 text-center underline decoration-4 decoration-highlight-400'>Delano Specials</p>
    <div class='flex flex-row justify-center mt-4 items-center'>    
        <table class='table-fixed mt-10 mb-10 border-collapse border border-slate-500 basis-10/12 lg:basis-6/12'>
            <caption class='caption-top mb-4'>
                <p class='font-medium text-md text-slate-500'>
                    Here are our Delano Specials!
                </p>
            </caption>
            <thead>
                <tr>
                    <th class={table_header_class}>Special</th>
                    <th class={table_header_class}>Price</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                <tr>
                    <td class={table_header_class + ' font-bold'}>Monday Thru Friday</td>
                    <td class={table_header_class}></td>
                </tr>
                <tr>
                    <td class={table_elem_class}>XL 1 Topping</td>
                    <td class={table_elem_class}>$17.99</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Extra Toppings</td>
                    <td class={table_elem_class}>+$2.25</td>
                </tr>
                <tr>
                    <td class={table_header_class + ' font-bold'}>Pizza Slices</td>
                    <td class={table_header_class}></td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Pepperoni</td>
                    <td class={table_elem_class}>$2.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Ham & Pineapple</td>
                    <td class={table_elem_class}>$3.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Tony's Combo</td>
                    <td class={table_elem_class}>$3.50</td>
                </tr>
                <tr>
                    <td class={table_header_class + ' font-bold'}>Lunch Specials</td>
                    <td class={table_header_class}></td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Pizza Slice, Salad & Lg. Drink</td>
                    <td class={table_elem_class}>$6.50</td>
                </tr>
            </tbody>
        </table>
        <img src='https://food.artofericjames.com/wp-content/uploads/2017/10/DSC8631.jpg'
            alt='slice of pizza' class='basis-4/12 hidden lg:inline h-72 ml-10 rounded-sm'/>
    </div>
</div>

<div class='flex flex-col mt-12 mb-20 hidden md:flex'>
    <p class='font-bold text-4xl text-main-300 text-center'>Build Your Own Pizza</p>
    <div class='flex flex-row justify-center mt-4 items-center'>    
        <table class='table-fixed mt-10 mb-10 border-collapse border border-slate-500 basis-11/12 lg:basis-9/12'>
            <caption class='caption-top mb-4'>
                <p class='font-medium text-sm md:text-md text-slate-500'>
                    Toppings: Anchovies, Tomatoes, Sausage, Salami, Pepperoni, Jalapenos, Canadian Bacon, 
                    Mushrooms, Black Olives, Chorizo, Bell Peppers, Onions, Pineapple
                </p>
            </caption>
            <thead>
                <tr>
                    <th class={table_header_class}>Size</th>
                    <th class={table_header_class}>Cheese Only</th>
                    <th class={table_header_class}>1 Topping</th>
                    <th class={table_header_class}>2 Toppings</th>
                    <th class={table_header_class}>3 Toppings</th>
                    <th class={table_header_class}>4 Toppings</th>
                    <th class={table_header_class}>Price Per Topping After 4</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                <tr> <!--small-->
                    <td class={table_elem_class}>Small</td>
                    <td class={table_elem_class}>$8.50</td>
                    <td class={table_elem_class}>$9.00</td>
                    <td class={table_elem_class}>$9.50</td>
                    <td class={table_elem_class}>$10.00</td>
                    <td class={table_elem_class}>$11.50</td>
                    <td class={table_elem_class}>+$1.50</td>
                </tr>
                <tr> <!--medium-->
                    <td class={table_elem_class}>Medium</td>
                    <td class={table_elem_class}>$12.00</td>
                    <td class={table_elem_class}>$13.50</td>
                    <td class={table_elem_class}>$15.00</td>
                    <td class={table_elem_class}>$16.50</td>
                    <td class={table_elem_class}>$17.50</td>
                    <td class={table_elem_class}>+$1.75</td>
                </tr>
                <tr> <!--large-->
                    <td class={table_elem_class}>Large</td>
                    <td class={table_elem_class}>$16.00</td>
                    <td class={table_elem_class}>$17.50</td>
                    <td class={table_elem_class}>$18.50</td>
                    <td class={table_elem_class}>$20.50</td>
                    <td class={table_elem_class}>$22.50</td>
                    <td class={table_elem_class}>+$2.00</td>
                </tr>
                <tr> <!--xlarge-->
                    <td class={table_elem_class}>Extra Large</td>
                    <td class={table_elem_class}>$19.50</td>
                    <td class={table_elem_class}>$21.00</td>
                    <td class={table_elem_class}>$23.50</td>
                    <td class={table_elem_class}>$26.00</td>
                    <td class={table_elem_class}>$28.50</td>
                    <td class={table_elem_class}>+$2.50</td>
                </tr>
            </tbody>
        </table>
        <img src='https://tonyspizzadelano.com/wp-content/uploads/2022/04/6.jpg'
            alt='combo pizza' class='basis-2/12 hidden lg:inline w-20 h-60 ml-10 rounded-sm'/>
    </div>
</div>

<div class='flex flex-col mt-12 mb-20 md:hidden'>
    <p class='font-bold text-4xl text-main-300 text-center'>Build Your Own Pizza</p>
    <div class='flex flex-row flex-wrap justify-center mt-4 items-center'>    
        <table class='table-auto mt-10 mb-10 border-collapse border border-slate-500 basis-11/12'>
            <caption class='caption-top mb-4'>
                <p class='font-medium text-sm md:text-md text-slate-500'>
                    Toppings: Anchovies, Tomatoes, Sausage, Salami, Pepperoni, Jalapenos, Canadian Bacon, 
                    Mushrooms, Black Olives, Chorizo, Bell Peppers, Onions, Pineapple
                </p>
            </caption>
            <thead>
                <tr>
                    <th class={table_header_class}>Size</th>
                    <th class={table_header_class}>Cheese Only</th>
                    <th class={table_header_class}>1 Topping</th>
                    <th class={table_header_class}>2</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                <tr> <!--small-->
                    <td class={table_elem_class}>Small</td>
                    <td class={table_elem_class}>$8.50</td>
                    <td class={table_elem_class}>$9.00</td>
                    <td class={table_elem_class}>$9.50</td>
                </tr>
                <tr> <!--medium-->
                    <td class={table_elem_class}>Medium</td>
                    <td class={table_elem_class}>$12.00</td>
                    <td class={table_elem_class}>$13.50</td>
                    <td class={table_elem_class}>$15.00</td>
                </tr>
                <tr> <!--large-->
                    <td class={table_elem_class}>Large</td>
                    <td class={table_elem_class}>$16.00</td>
                    <td class={table_elem_class}>$17.50</td>
                    <td class={table_elem_class}>$18.50</td>
                </tr>
                <tr> <!--xlarge-->
                    <td class={table_elem_class}>Extra Large</td>
                    <td class={table_elem_class}>$19.50</td>
                    <td class={table_elem_class}>$21.00</td>
                    <td class={table_elem_class}>$23.50</td>
                </tr>
            </tbody>
        </table>
        <table class='table-auto mt-10 mb-10 border-collapse border border-slate-500 basis-11/12'>
            <thead>
                <tr>
                    <th class={table_header_class}>Size</th>
                    <th class={table_header_class}>3</th>
                    <th class={table_header_class}>4</th>
                    <th class={table_header_class}>Price Per Topping After 4</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                <tr> <!--small-->
                    <td class={table_elem_class}>Small</td>
                    <td class={table_elem_class}>$10.00</td>
                    <td class={table_elem_class}>$11.50</td>
                    <td class={table_elem_class}>+$1.50</td>
                </tr>
                <tr> <!--medium-->
                    <td class={table_elem_class}>Medium</td>
                    <td class={table_elem_class}>$16.50</td>
                    <td class={table_elem_class}>$17.50</td>
                    <td class={table_elem_class}>+$1.75</td>
                </tr>
                <tr> <!--large-->
                    <td class={table_elem_class}>Large</td>
                    <td class={table_elem_class}>$20.50</td>
                    <td class={table_elem_class}>$22.50</td>
                    <td class={table_elem_class}>+$2.00</td>
                </tr>
                <tr> <!--xlarge-->
                    <td class={table_elem_class}>Extra Large</td>
                    <td class={table_elem_class}>$26.00</td>
                    <td class={table_elem_class}>$28.50</td>
                    <td class={table_elem_class}>+$2.50</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class='flex flex-col mt-12 mb-20'>
    <p class='font-bold text-4xl text-main-300 text-center'>Specialty Pizzas</p>
    <div class='flex flex-row justify-center mt-4 items-center'>    
        <table class='table-fixed mt-10 mb-10 border-collapse border border-slate-500 basis-11/12 lg:basis-9/12'>
            <caption class='caption-top mb-4'>
                <p class='font-medium text-md text-slate-500'>
                    Hover or click over specialty's name for more information.
                </p>
            </caption>
            <thead>
                <tr>
                    <th class={table_header_class}>Specialty</th>
                    <th class={table_header_class}>Small</th>
                    <th class={table_header_class}>Medium</th>
                    <th class={table_header_class}>Large</th>
                    <th class={table_header_class}>Extra Large</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                <tr>
                    <td class={table_elem_class + ' group relative'}>
                        <span class='invisible group-hover:visible font-medium absolute max-w-sm min-w-[15rem] bg-main-400 text-sm text-slate-100 p-2 rounded-lg' style='bottom: 105%; left: 0%'>
                            Salami, Peperoni, Mushrooms, Olives, Onions, Bell Pepper, Sausage
                        </span>
                        Tony's Combo
                    </td>
                    <td class={table_elem_class}>$13.50</td>
                    <td class={table_elem_class}>$16.75</td>
                    <td class={table_elem_class}>$24.50</td>
                    <td class={table_elem_class}>$31.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class + ' group relative'}>
                        <span class='invisible group-hover:visible font-medium absolute max-w-sm min-w-[15rem] bg-main-400 text-sm text-slate-100 p-2 rounded-lg' style='bottom: 105%; left: 0%'>
                            Chorizo, Onions, Tomatoes, Jalapeños
                        </span>
                        Mexicana
                    </td>
                    <td class={table_elem_class}>$11.50</td>
                    <td class={table_elem_class}>$15.50</td>
                    <td class={table_elem_class}>$22.50</td>
                    <td class={table_elem_class}>$28.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class + ' group relative'}>
                        <span class='invisible group-hover:visible font-medium absolute max-w-sm min-w-[15rem] bg-main-400 text-sm text-slate-100 p-2 rounded-lg' style='bottom: 105%; left: 0%'>
                            Green Chile, Pork Topping Spicy Pizza
                        </span>
                        Chile Verde
                    </td>
                    <td class={table_elem_class}>$14.10</td>
                    <td class={table_elem_class}>$19.40</td>
                    <td class={table_elem_class}>$25.95</td>
                    <td class={table_elem_class}>$31.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class + ' group relative'}>
                        <span class='invisible group-hover:visible font-medium absolute max-w-sm min-w-[15rem] bg-main-400 text-sm text-slate-100 p-2 rounded-lg' style='bottom: 105%; left: 0%'>
                            Canadian Bacon, Bell Pepper, Pineapple
                        </span>
                        Hawaiian
                    </td>
                    <td class={table_elem_class}>$10.50</td>
                    <td class={table_elem_class}>$14.50</td>
                    <td class={table_elem_class}>$20.50</td>
                    <td class={table_elem_class}>$27.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class + ' group relative'}>
                        <span class='invisible group-hover:visible font-medium absolute max-w-sm min-w-[15rem] bg-main-400 text-sm text-slate-100 p-2 rounded-lg' style='bottom: 105%; left: 0%'>
                            Chicken, Canadian Bacon, Bell Pepper, Pineapple
                        </span>
                        Chicken Hawaiian
                    </td>
                    <td class={table_elem_class}>$12.50</td>
                    <td class={table_elem_class}>$16.25</td>
                    <td class={table_elem_class}>$21.75</td>
                    <td class={table_elem_class}>$27.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class + ' group relative'}>
                        <span class='invisible group-hover:visible font-medium absolute max-w-sm min-w-[15rem] bg-main-400 text-sm text-slate-100 p-2 rounded-lg' style='bottom: 105%; left: 0%'>
                            Chicken breast marinated in Teriyaki sauce
                        </span>
                        Chicken Teriyaki
                    </td>
                    <td class={table_elem_class}>$12.00</td>
                    <td class={table_elem_class}>$15.75</td>
                    <td class={table_elem_class}>$21.75</td>
                    <td class={table_elem_class}>$27.95</td>
                </tr>
                <tr>
                    <td class={table_elem_class + ' group relative'}>
                        <span class='invisible group-hover:visible font-medium absolute max-w-sm min-w-[15rem] bg-main-400 text-sm text-slate-100 p-2 rounded-lg' style='bottom: 105%; left: 0%'>
                            Fresh Onions, Olives, Mushrooms, Bell Pepper, Tomatoes
                        </span>
                        Veggie
                    </td>
                    <td class={table_elem_class}>$13.50</td>
                    <td class={table_elem_class}>$16.50</td>
                    <td class={table_elem_class}>$24.00</td>
                    <td class={table_elem_class}>$28.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class + ' group relative'}>
                        <span class='invisible group-hover:visible font-medium absolute max-w-sm min-w-[15rem] bg-main-400 text-sm text-slate-100 p-2 rounded-lg' style='bottom: 105%; left: 0%'>
                            Canadian Bacon, Pepperoni, Salami, Sausage
                        </span>
                        Meat Lover's
                    </td>
                    <td class={table_elem_class}>$14.00</td>
                    <td class={table_elem_class}>$17.25</td>
                    <td class={table_elem_class}>$25.00</td>
                    <td class={table_elem_class}>$32.00</td>
                </tr>
            </tbody>
        </table>
        <img src='https://tonyspizzadelano.com/wp-content/uploads/2022/04/7.jpg'
            alt='chile verde pizza' class='basis-2/12 hidden lg:inline w-20 h-60 ml-10 rounded-sm'/>
    </div>
</div>

<div class='flex flex-col mt-12 mb-20'>
    <p class='font-bold text-4xl text-main-300 text-center'>Extras</p>
    <div class='flex flex-row flex-wrap justify-around mt-4 items-center'>    
        <table class='table-fixed mt-10 mb-10 border-collapse border border-slate-500 basis-10/12 md:basis-5/12'>
            <caption class='caption-top mb-4'>
                <p class='font-medium text-md text-slate-500'>
                    Our sandwiches come with potato/macaroni salad & a bag of chips.
                </p>
            </caption>
            <thead>
                <tr>
                    <th class={table_header_class}>Sandwich</th>
                    <th class={table_header_class}>Price</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                <tr>
                    <td class={table_elem_class}>Ham</td>
                    <td class={table_elem_class}>$9.25</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Turkey</td>
                    <td class={table_elem_class}>$9.25</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Submarine Pastrami</td>
                    <td class={table_elem_class}>$9.25</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Roast Beef</td>
                    <td class={table_elem_class}>$9.25</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>BBQ Beef</td>
                    <td class={table_elem_class}>$9.25</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Veggie</td>
                    <td class={table_elem_class}>$9.25</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Chicken</td>
                    <td class={table_elem_class}>$9.25</td>
                </tr>
            </tbody>
        </table>
        <table class='table-fixed mt-10 mb-10 border-collapse border border-slate-500 basis-10/12 md:basis-5/12'>
            <caption class='caption-top mb-4'>
                <p class='font-medium text-md text-slate-500'>
                    Our appetizers are freshly made, guaranteed!
                </p>
            </caption>
            <thead>
                <tr>
                    <th class={table_header_class}>Appetizer</th>
                    <th class={table_header_class}>Price</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                <tr>
                    <td class={table_elem_class}>Buffalo Wings: 8pc/16pc</td>
                    <td class={table_elem_class}>$11.25/$19.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Inferno Hot Wings: 8pc/16pc</td>
                    <td class={table_elem_class}>$11.25/$19.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Spice BBQ Wings: 8pc/16pc</td>
                    <td class={table_elem_class}>$11.25/$19.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Salad</td>
                    <td class={table_elem_class}>$4.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Chicken Salad</td>
                    <td class={table_elem_class}>$7.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>3pc. Chicken Strips w/ Wedges</td>
                    <td class={table_elem_class}>$8.25</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Bread Sticks</td>
                    <td class={table_elem_class}>$7.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Cheese Sticks</td>
                    <td class={table_elem_class}>$8.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Potato Wedges</td>
                    <td class={table_elem_class}>$6.00</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class='flex flex-col mt-12 mb-20'>
    <p class='font-bold text-4xl text-main-300 text-center'>Drinks</p>
    <div class='flex flex-row flex-wrap justify-around mt-4 items-center md:items-end'>    
        <table class='table-fixed mt-10 mb-10 border-collapse border border-slate-500 basis-10/12 lg:basis-5/12'>
            <caption class='caption-top mb-4'>
                <p class='font-medium text-md text-slate-500'>
                    Soft drink of choice: Pepsi, Diet Pepsi, Cherry Pepsi, Dr. Pepper, Mountain Dew, Sierra Mist, 
                    Root Beer, Lemonade, Pink Lemonade, Fruit Punch, Raspberry Tea, Brewed Tea 
                </p>
            </caption>
            <thead>
                <tr>
                    <th class={table_header_class}>Kind</th>
                    <th class={table_header_class}>Price</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                <tr>
                    <td class={table_elem_class}>Small Soft Drink</td>
                    <td class={table_elem_class}>$1.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Medium Soft Drink</td>
                    <td class={table_elem_class}>$2.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Large Soft Drink</td>
                    <td class={table_elem_class}>$2.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Drink Pitcher</td>
                    <td class={table_elem_class}>$7.50</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Bottle Water</td>
                    <td class={table_elem_class}>$2.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>2 Liter Soda (To Go ONLY)</td>
                    <td class={table_elem_class}>$4.00</td>
                </tr>
            </tbody>
        </table>
        <table class='table-fixed mt-10 mb-10 border-collapse border border-slate-500 basis-10/12 lg:basis-5/12'>
            <caption class='caption-top mb-4'>
                <p class='font-medium text-md text-slate-500'>
                    Alcholic Drinks (must be 21+ to purchase)
                </p>
            </caption>
            <thead>
                <tr>
                    <th class={table_header_class}>Kind</th>
                    <th class={table_header_class}>Glass</th>
                    <th class={table_header_class}>Pitcher</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                <tr>
                    <td class={table_elem_class}>Budlight</td>
                    <td class={table_elem_class}>$3.50</td>
                    <td class={table_elem_class}>$13.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Coors Light</td>
                    <td class={table_elem_class}>$3.50</td>
                    <td class={table_elem_class}>$13.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Michelob Ultra</td>
                    <td class={table_elem_class}>$3.75</td>
                    <td class={table_elem_class}>$14.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Modelo Especial</td>
                    <td class={table_elem_class}>$4.00</td>
                    <td class={table_elem_class}>$15.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>Pacifico</td>
                    <td class={table_elem_class}>$4.00</td>
                    <td class={table_elem_class}>$15.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>805</td>
                    <td class={table_elem_class}>$4.00</td>
                    <td class={table_elem_class}>$15.00</td>
                </tr>
                <tr>
                    <td class={table_elem_class}>8 Oz. Wine</td>
                    <td class={table_elem_class}>$4.50</td>
                    <td class={table_elem_class}>-</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>