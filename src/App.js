import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/constants';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/notFound'));

const App = () =>
    <Router>
        <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                <Route path={ROUTES.LOGIN} component={Login}/>
                <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    </Router>

export default App;
