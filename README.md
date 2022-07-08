# :star2: Information Visualization :star2: #
## :ramen:  A web deployable dashboard: “AFRICA HUNGER AND FOOD INSECURITY” :ramen: ##

![image](https://user-images.githubusercontent.com/100490285/178079300-0730ef39-c2b0-4f0d-a4d6-795c27089258.png)

### :one: Key Findings ###

* Countries in North Africa such as Morocco, Tunisia, Algeria, and Egypt have higher food security.
* The percentages of African population that experienced food insecurity significantly rose from 47.3% in 2014 to nearly 60% in 2020. While the percentages of the World total population was only 30.4% in 2020.
* Accompany with food insecurity, Food Price Index also doubled from 77 in 2005 to 142 in early 2022.
* There was a surge in the Food Price Index from 99.2 in 2019 to 142 in 2022, which indicates some relationship between Covid-19 and Russia-Ukraine war to food prices. On the brightside, the prevalence of undernourishment vs. GDP per capita chart shows that African countries are improving their undernourishment rate.
* However, there are still some countries like Congo, Ethiopia, and Madagascar suffer from severe food insecurity (with more than 20% population undernourish and Food Security Index below 40).

### :two: Data resources ###
* The Global Food Security Index (GFSI) considers the issues of food affordability, availability, quality and safety, and natural resources and resilience across a set of 113 countries.
* The index is a dynamic quantitative and qualitative benchmarking model constructed from 58 unique indicators that measure the drivers of food security across both developing and developed countries.
* Food insecurity population percentages and Food Price Index was both extracted from [FAO's website](https://www.fao.org/faostat/en/#data/FS "https://www.fao.org/faostat/en/#data/FS").
* Undernourished percentage vs. GDP per capita data was derived from [Ourworldindata's website](https://ourworldindata.org/hunger-and-undernourishment#undernourishment "https://ourworldindata.org/hunger-and-undernourishment#undernourishment").

### :three: Limitations ###
* All 4 datasets on have missing data from some African countries, therefore, choosing a set of countries that are available is a must.
* [FAO's data](https://www.fao.org/faostat/en/#data/FS "https://www.fao.org/faostat/en/#data/FS") does not include iso-3 country code in their data. It is time-consuming to lookup for those values.
* Most FAO's datasets do not have up-to-date data, usually with a lag of 2-3 years.
* The data format are not compatible in Javascript so turning them into JSON is also time-consuming
* Nevertheless, FAO provides data from all over the world, therefore, it is possible to use another subset for visualization purposes
