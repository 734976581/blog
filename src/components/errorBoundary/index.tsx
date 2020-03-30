/**
 * created by chenbiao on 2020/03/29
 */
import React from 'react';
//组件
import NotFound from '../notFound';

interface Props {
    children: any;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error: Error){
        return {
            hasError: true
        };
    }
    componentDidCatch(error:Error, info: any): void {
        this.setState({
            hasError: true
        });
        console.log(error, info);
    }
    public render () {
        return this.state.hasError ? (
            <NotFound />
        ) : (
            <div>{this.props.children}</div>
        )
    }
}

export default ErrorBoundary;