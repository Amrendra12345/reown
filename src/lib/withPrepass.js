import { NextPage, NextPageContext } from 'next';
import NextApp, { AppContext } from 'next/app';
import React from 'react';
import ssrPrepass from "react-ssr-prepass";
import { fetchStore } from './myFetch';

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

export function withPrepass() {
    return (AppOrPage) => {

        const withPrepass = (props) => {
            return (
                <AppOrPage {...props} />
            );
        };

        withPrepass.displayName = `withPrepass(${getDisplayName(AppOrPage)})`;

        withPrepass.getInitialProps = async (appOrPageCtx) => {
            const { AppTree } = appOrPageCtx;

            // Determine if we are wrapping an App component or a Page component.
            const isApp = !!(appOrPageCtx).Component;
            const ctx = isApp
                ? (appOrPageCtx).ctx
                : (appOrPageCtx);

            // Run the wrapped component's getInitialProps function.
            let pageProps;
            if (AppOrPage.getInitialProps) {
                pageProps = await AppOrPage.getInitialProps(appOrPageCtx);
            }

            // Check the window object to determine whether or not we are on the server.
            // getInitialProps runs on the server for initial render, and on the client for navigation.
            // We only want to run the prepass step on the server.
            if (typeof window !== 'undefined') {
                return pageProps ?? {};
            }

            const props = { ...pageProps };
            const appTreeProps = isApp ? props : { pageProps: props };

            // Run the prepass step on AppTree. This will run all urql queries on the server.
            await ssrPrepass(<AppTree {...appTreeProps} />, (element, instance) => {
                const getSsrData = element.type.getSsrData
                if (typeof getSsrData === "function") {
                    getSsrData()
                }
            });

            return {
                ...pageProps,
                fetchStore
            };
        };

        return withPrepass;
    };
}