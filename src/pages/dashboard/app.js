import { Helmet } from 'react-helmet-async';
// sections
import { OverviewAppView } from 'src/sections/app/view';

// ----------------------------------------------------------------------

export default function OverviewAppPage() {
  return (
    <>
      <Helmet>
        <title> Blockyfiers: App</title>
      </Helmet>
      <OverviewAppView />
    </>
  );
}
