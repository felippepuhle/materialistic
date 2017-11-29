import * as React from 'react';

import drawRoutes from '../../router/utils/drawRoutes';

const DashboardTemplate = props => <div>{drawRoutes(props.routes)}</div>;

export default DashboardTemplate;