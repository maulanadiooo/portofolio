<script>
    import darulMannanImage from '$lib/images/darulmannan.png'
    import obangSantrehImage from '$lib/images/obang-santreh.png'
    import hadeerImage from '$lib/images/hadeer.png'
    import menangTelakImage from '$lib/images/menang-telak.png'
    import d3SmmImage from '$lib/images/d3smm.png'
    import {t} from '$lib/Translate/i18n';
    import MongoDbIcon from "$lib/images/MongoDbIcon.svelte";
    import ExpressJsIcon from "$lib/images/ExpressJsIcon.svelte";
    import AstroJs from "$lib/images/AstroJs.svelte";
    import FlutterIcon from "$lib/images/FlutterIcon.svelte";
    import BunJsIcon from "$lib/images/BunJsIcon.svelte";
    import MysqlIcon from "$lib/images/MysqlIcon.svelte";
</script>

<section id="portfolio" class="pt-28 pb-16 bg-slate-100 dark:bg-slate-800">
    <div class="container">
        <div class="w-full px-4">
            <div class=" mx-auto text-center mb-16">
                <h4 class="text-primary font-bold uppercase mb-2 text-xl lg:text-2xl">Portfolio</h4>
                <h2 class="font-bold text-dark mb-4 lg:text-xl dark:text-white">{$t("portfolio.title")}</h2>
                <p class="text-secondary font-medium text-sm lg:text-base dark:text-secondary-dark">
                    {@html $t("portfolio.subTitle")}
                </p>
            </div>
        </div>
        <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div class="mb-12 p-4 md:w-1/2">
                <div class="rounded-md shadow-md overflow-hidden w-full mb-4 h-[300px]">
                    <img src={obangSantrehImage} alt="Obang Santreh" class="object-fill w-full h-full"/>
                </div>
                <h3 class="font-semibold text-xl text-dark mb-2 dark:text-white">Obang Santreh</h3>
                <p class="text-base text-secondary font-medium dark:text-secondary-dark">{$t("portfolio.obangSantreh")}</p>
                <div class="flex items-center mb-6 mt-4">
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-dark hover:border-dark hover:dark:text-white hover:dark:border-white">
                        <ExpressJsIcon widthSvg={20}/>
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-green-900 hover:border-green-900">
                        <MongoDbIcon widthSvg={20}/>
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-blue-600 hover:border-blue-600">
                        <FlutterIcon widthSvg={20}/>
                    </span>
                </div>
            </div>
            <div class="mb-12 p-4 md:w-1/2">
                <div class="rounded-md shadow-md overflow-hidden w-full mb-4 h-[300px]">
                    <img src={darulMannanImage} alt="Darul Mannan" class="object-cover w-full h-full"/>
                </div>
                <h3 class="font-semibold text-xl text-dark mb-2 dark:text-white">Darul Mannan Dashboard</h3>
                <p class="text-base text-secondary font-medium dark:text-secondary-dark">{$t("portfolio.darulMannanDashboard")}</p>
                <div class="flex items-center mb-6 mt-4">
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-dark hover:border-dark hover:dark:text-white hover:dark:border-white">
                        <ExpressJsIcon widthSvg={20}/>
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-green-900 hover:border-green-900">
                        <MongoDbIcon widthSvg={20}/>
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border-dark">
                        <AstroJs widthSvg={20}/>
                    </span>
                </div>
            </div>
            <div class="mb-12 p-4 md:w-1/2">
                <div class="rounded-md shadow-md overflow-hidden w-full mb-4 h-[300px]">
                    <img src={hadeerImage} alt="Hadeer" class="object-cover w-full h-full"/>
                </div>
                <h3 class="font-semibold text-xl text-dark mb-2 dark:text-white">Hadeer Aplication (Attendance)</h3>
                <p class="text-base text-secondary font-medium dark:text-secondary-dark">{$t("portfolio.hadeer")}</p>
                <div class="flex items-center mb-6 mt-4">
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-dark hover:border-dark hover:dark:text-white hover:dark:border-white">
                        <ExpressJsIcon widthSvg={20}/>
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-green-900 hover:border-green-900">
                        <MongoDbIcon widthSvg={20}/>
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-blue-600 hover:border-blue-600">
                        <FlutterIcon widthSvg={20}/>
                    </span>
                </div>
            </div>

            <div class="mb-12 p-4 md:w-1/2">
                <div class="rounded-md shadow-md overflow-hidden w-full mb-4 h-[300px]">
                    <img src={menangTelakImage} alt="Menang Telak" class="object-fill w-full h-full"/>
                </div>
                <h3 class="font-semibold text-xl text-dark mb-2 dark:text-white">Menang Telak</h3>
                <p class="text-base text-secondary font-medium dark:text-secondary-dark">{$t("portfolio.menangTelak")}</p>
                <div class="flex items-center mb-6 mt-4">
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-dark hover:border-dark hover:dark:text-white hover:dark:border-white">
                        <ExpressJsIcon widthSvg={20}/>
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-green-900 hover:border-green-900">
                        <MongoDbIcon widthSvg={20}/>
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-blue-600 hover:border-blue-600">
                        <FlutterIcon widthSvg={20}/>
                    </span>
                </div>
            </div>
            <div class="mb-12 p-4 md:w-1/2">
                <div class="rounded-md shadow-md overflow-hidden w-full mb-4 h-[300px]">
                    <img src={d3SmmImage} alt="D3Smm - Smm Panel Indonesia" class="object-fill w-full h-full"/>
                </div>
                <h3 class="font-semibold text-xl text-dark mb-2 dark:text-white">D3Smm - Smm Panel Indonesia</h3>
                <p class="text-base text-secondary font-medium dark:text-secondary-dark">{$t("portfolio.d3smm")}</p>
                <div class="flex items-center mb-6 mt-4">
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-orange-400 hover:border-orange-400">
                        <BunJsIcon widthSvg={20}/>
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-blue-500 hover:border-blue-500">
                        <MysqlIcon widthSvg={20} />
                    </span>
                    <span
                            class="socmed-icon cursor-pointer hover:bg-transparent hover:text-blue-600 hover:border-blue-600">
                        <FlutterIcon widthSvg={20}/>
                    </span>
                </div>
            </div>
        </div>
    </div>

</section>