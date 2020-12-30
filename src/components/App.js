import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Start from '../pages/Start';
import NotFound from '../pages/NotFound';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetailsContainer';

function App(){
    return (
        <BrowserRouter>
        <Layout>
        <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/badges/:bagdeId/edit" component={BadgeEdit} />
        <Route exact path="/badges/:bagdeId" component={BadgeDetails} />
        <Route component={NotFound}/>
        </Switch>
        </Layout>
        </BrowserRouter>
    );
}
export default App;