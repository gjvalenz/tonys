<script>
    const img_sources = 
    [
        'https://raw.githubusercontent.com/GerardVee/tonys-pizza/master/public/carousel/banner1.jpg',
        'https://raw.githubusercontent.com/GerardVee/tonys-pizza/master/public/carousel/banner2.jpg',
        'https://raw.githubusercontent.com/GerardVee/tonys-pizza/master/public/carousel/banner3.jpg',
        'https://raw.githubusercontent.com/GerardVee/tonys-pizza/master/public/carousel/banner4.jpg',
        'https://raw.githubusercontent.com/GerardVee/tonys-pizza/master/public/carousel/banner5.jpg'
    ]
    const img_class = 'absolute top-0 left-0 w-screen h-full'
    let count = 0
    let holding_count = 0
    let holding = true
	const img_time = 1.0
	const tick_time = (img_time * 1000) / 100
	const num_pics = img_sources.length
	const n = num_pics * 100
	setInterval(function(){
        if(holding){
            holding_count++;
            if(holding_count == 100){
                holding = false
                holding_count = 0
            }
            return
        }
        if(++count == n)
            count=0
        if(count % 100 == 0)
            holding = true
    }, tick_time)
    
    let y = 0
    /**
	 * @type {HTMLElement|undefined}
	 */
    let el
    //$: scrolledHere = el && window? (y + window.innerHeight/2 >= el.getBoundingClientRect().top) : false
	$: pic = Math.floor(count / 100)
	$: next_pic = pic == num_pics - 1 ? 0 : pic + 1
	$: opacity = 1 - (count%100)/100
	$: inv_opacity = 1 - opacity

</script>

<div class='relative lg:h-[36rem] md:h-[30rem] h-[15rem] border-b-4 border-main-600'>
    <img class='ease-in-out duration-150 z-30 absolute h-24 w-24 top-[calc(50%-3rem)] right-[calc(50%-3rem)] md:h-52 md:w-52 md:top-[calc(50%-13rem/2)] md:right-[calc(50%-13rem/2)] opacity-90 hover:opacity-100 hover:scale-110 hover:bg-main-400 hover:border-4 border-main-400 rounded-full'
        src='https://tonyspizzadelano.com/wp-content/uploads/2020/10/Tony_s-pizza-logo1.png'
        alt='tonys pizza logo' />
    <img class={img_class} src={img_sources[pic]}
        alt={`picture of banner ${pic}`} style={`opacity: ${opacity}`} />
    <img class={img_class} src={img_sources[next_pic]}
        alt={`picture of banner ${next_pic}`} style={`opacity: ${inv_opacity}`} />
</div>
<div class='flex flex-col items-center'>
    <div class='flex flex-row mt-12 mb-12'>
        <p class='font-bold text-4xl md:text-6xl text-main-300 underline decoration-4 md:decoration-8 md:underline-offset-8 decoration-highlight-300 text-center'>
            Welcome to Tony's Pizza
        </p>
    </div>
    <div class='flex flex-row mb-10 justify-center'>
        <p class='max-w-[90%] md:max-w-3xl text-center text-md md:text-lg text-slate-800'>
            Last year we celebrated 40 years of making pizzas here in Delano. Some estimates suggest our surrounding 
            communities have enjoyed over 2,000,000 pizzas since 1979.
        </p>
    </div>
    <div class='flex flex-row mb-10 justify-center'>
        <p class='max-w-[90%] md:max-w-3xl text-center text-md md:text-lg text-slate-800'>
            Today every pizza has the same quality as in days gone by. Generations have enjoyed our pizza classics 
            such as the combination pizza covered with only the best sausage, ham, pepperoni and salami with all fresh 
            ingredients, our Hawaiian pizza with those juicy pineapples, or Tony’s signature Chile-Verde Pizza!
        </p>
    </div>
    <div class='flex flex-col mb-20 items-center' bind:this={el}>
        <p class='max-w-[90%] md:max-w-3xl text-center text-md md:text-lg text-slate-800 mb-16'>
            Currently licensed by the county of Kern and state of California to sell alcohol products, located on our patio, 
            in compliance with Covid-19 Protocols. Tony’s Pizza Delano can handle large orders, large parties, reliable, and 
            on time with a 44-60 hour notice. Enjoy our pizza!
        </p>
        {#if true} <!-- removed this functionality as annoying to code with -->
        <div class='flex flex-row'>
            <div class='basis-5/12'>
                <img src='https://static.wixstatic.com/media/2cc490_238cbdfb9d634096a1cfa42272c6f2e7~mv2.jpeg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GPA_Pic.jpeg' alt='tonys pizza guy'
                    class='origin-bottom -rotate-[15deg] w-3/4 rounded-lg ml-10 md:ml-20' />
            </div>
            <div class='basis-2/12'></div>
            <div class='basis-5/12'>
                <img src='https://tonyspizzadelano.com/wp-content/uploads/2022/04/3.jpg' alt='pizza'
                    class='origin-bottom rotate-[15deg] w-3/4 rounded-lg'/>  
            </div>
        </div>
        {/if}
    </div>
</div>

<svelte:window bind:scrollY={y} />