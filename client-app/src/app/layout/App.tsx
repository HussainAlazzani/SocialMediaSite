import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path="/" component={HomePage} />
      {/* <Route
        // For any route that matches /{something...}
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route key={location.key} path={["/createactivity", "/manage/:id"]} component={ActivityForm} />
            </Container>
          </>
        )}
      /> */}

      <Route path={"/(.+)"}>
        <NavBar />
        <Container style={{ marginTop: "7em" }}>
          <Route exact path="/activities" component={ActivityDashboard} />
          <Route path="/activities/:id" component={ActivityDetails} />
          <Route key={location.key} path={["/createactivity", "/manage/:id"]} component={ActivityForm} />
        </Container>
      </Route>

    </>
  );
}

export default observer(App);