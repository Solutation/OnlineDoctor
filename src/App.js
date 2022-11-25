import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/Layouts';
import { init as InternationalizeConfig } from '~/config/InternationalizeConfig';

import { store } from '~/redux';

InternationalizeConfig();

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const propList = { ...route };
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page {...propList} />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Provider>
    );
};

export default App;
