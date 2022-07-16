# CashGraphs

### Project Description
CashGraphs is a web app for running 
[modern portfolio theory](https://en.wikipedia.org/wiki/Modern_portfolio_theory)
 optimizations. Select a "flavor" to specify your investable asset universe, a 
risk metric, and any weight constraints, and then run the optimizer. The 
algorithm will pick out a full efficient frontier of optimized portfolios for 
all risk preferences.

### Live Site
[https://www.cashgraphs.com](https://www.cashgraphs.com "CashGraphs Live Demo")

### Under the Hood
Frontend is Vue 2 + Vuetify. There is no styling beyond the Vuetify defaults 
because I know nothing about CSS. Charts are done with ChartJS and very little
customization. The backend algorithm is an AWS Lambda function that runs a 
Torch optimizer to return the efficient frontier chart plot points and 
portfolio weights.

### Why Did I Build This?
I'm a personal financial adviser, and I like getting into the weeds on asset 
allocation stuff. I also like learning coding stuff and thought that portfolio 
optimization was a cool use case for machine learning optimizers like 
TensorFlow and Torch (the first few versions of the backend used TensorFlow). 
I use this optimizer for my client portfolios, and I thought that larger-scale 
portfolio managers might be interested in it as well.
