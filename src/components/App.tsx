import * as React from "react";
import { baseLink } from "../apis/datasource";

// export interface HelloProps {
//   compiler: string;
//   framework: string;
// }

export class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    baseLink.get("/public/data/data.json").then((res: { data: any }) => {
      const data = res.data;
      this.setState({ data });
      console.log(data);
    });
  }

  render() {
    return <div>Horse Racing Loading </div>;
  }
}
