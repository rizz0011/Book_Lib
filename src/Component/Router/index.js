import React from "react";
import TableView from "../Table";
import Home from "../Home";
import BookDetail from "../AddTodo/BookDetail";
import Employee from "../AddEmployee";

import { Switch, Route } from "react-router-dom";

function RouterPage() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tableView">
          <TableView />
        </Route>
        <Route path="/bookList">
          <BookDetail />
        </Route>
        <Route path="/employee">
          <Employee />
        </Route>
      </Switch>
    </>
  );
}

export default RouterPage;
