import * as React from 'react';

import drawRoutes from '../../router/utils/drawRoutes';

const LaunchTemplate = props => <div>{drawRoutes(props.routes)}</div>;

export default LaunchTemplate;