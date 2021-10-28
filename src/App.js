import { Component } from 'react';

import MainBlockHomePage from './components/main-block/main-block';
import AboutUs from './components/about-us/about-us';
import OurBest from './components/our-best/our-best';
import Footer from './components/footer/footer';
import { MainBlock } from './components/main-block/main-block';
import OurBeans from './components/our-beans/our-beans';
import AllCoffee from './components/all-coffee/all-coffee';

import Coffee from '../src/components/all-coffee/coffee.png';
import Coffee1 from '../src/components/our-best/best-1.png';
import Coffee2 from '../src/components/our-best/best-2.png';
import Coffee3 from '../src/components/our-best/best-3.png';

import './App.css';

class  App extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
        data: [
          {  
            id: 1,    
            name: 'AROMISTICO Coffee 1 kg',
            cost: '6.99',
            src: Coffee,
            alt: 'AROMISTICO Coffee 1 kg',
            link: "#",
            country: 'Brazil',
            best: false,
        },
        {    
            id: 2, 
            name: 'AROMISTICO Coffee 2 kg',
            cost: '12.99',
            src: Coffee,
            alt: 'AROMISTICO Coffee 2 kg',
            link: "#",
            country: 'Kenya',
            best: false,
        },
        {   
            id: 3,  
            name: 'AROMISTICO Coffee 3 kg',
            cost: '16.99',
            src: Coffee,
            alt: 'AROMISTICO Coffee 3 kg',
            link: "#",
            country: 'Columbia',
            best: false,
        },
        {   
            id: 4,  
            name: 'AROMISTICO NEW Coffee 1 kg',
            cost: '6.99',
            src: Coffee,
            alt: 'AROMISTICO Coffee 1 kg',
            link: "#",
            country: 'Brazil',
            best: false,
        },
        {   
            id: 5,  
            name: 'AROMISTICO NEW Coffee 2 kg',
            cost: '12.99',
            src: Coffee,
            alt: 'AROMISTICO Coffee 2 kg',
            link: "#",
            country: 'Kenya',
            best: false,
        },
        {   
            id: 6,  
            name: 'AROMISTICO NEW Coffee 3 kg',
            cost: '16.99',
            src: Coffee,
            alt: 'AROMISTICO Coffee 3 kg',
            link: "#",
            country: 'Columbia',
            best: false,
        },
        {
            id: 7,
            name: 'Solimo Coffee Beans 2 kg',
            cost: '10.73',
            src: Coffee1,
            alt: 'Solimo Coffee Beans 2 kg',
            link: "#",
            best: true,
        },
        {
            id: 8, 
            name: 'Presto Coffee Beans 1 kg',
            cost: '15.99',
            src: Coffee2,
            alt: 'Presto Coffee Beans 1 kg',
            link: "#",
            best: true,
        },
        {
            id: 9, 
            name: 'AROMISTICO Coffee 1 kg',
            cost: '6.99',
            src: Coffee3,
            alt: 'AROMISTICO Coffee 1 kg',
            link: "#",
            best: true,
        }
        ],
        term: '',
        filter: 'all',
        }
    }

    ourBest = (items) => {
        return items.filter(item => item.best);
    };

    onFilterSelect = (filter) => {
        if (this.state.filter === filter) {
            this.setState(({filter: 'all'}) )
        } else {
            this.setState(({filter}));
        }
    }
    

    filterPost = (items, filter) => {
        switch(filter) {
            case 'Brazil' : 
                return items.filter(item => item.country === 'Brazil');

            case 'Kenya': 
                return items.filter(item => item.country === 'Kenya');

            case 'Columbia': 
                return items.filter(item => item.country === 'Columbia');
            default: 
                return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return (item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
        })
    }

    render() {
        const {data, term, filter} = this.state;
        const bestCoffee = this.ourBest(data);
         
        const filterData = this.filterPost(this.searchItem(data, term), filter);

      return (
        <div className="App">
          <MainBlock/>
          <OurBeans/>
          <AllCoffee 
            searchItem = {this.onUpdateSearch}
            filter={filter}
            onFilterSelect = {this.onFilterSelect}
            coffeeCards = {filterData}/>
          <OurBest bestCoffeeData = {bestCoffee}/>
          <Footer/>
        </div>
      );
    }
};

export default App;
