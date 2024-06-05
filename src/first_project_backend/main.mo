import Text "mo:base/Text";
import Buffer "mo:base/Buffer";

actor manifesto{

  let name : Text = "Motoko Learning";
  var manifesto : Text = " By learning this we will become motoko developers";
  var goals  : Buffer.Buffer<Text> = Buffer.Buffer<Text>(0); 

  public query func getName() : async Text {                         //Function that return name of DAO
    return name;

  };

  public query func getManifesto() : async Text {                    //Function that return manifesto of DAO
    return manifesto;

  };

  public func setManifesto( newManifesto : Text) : async () {         //Function to updates the value of  DAO
    manifesto := newManifesto;
    return ();

  };

  public func addGoals(goal : Text) : async () {                      //Function that adds goal to buffer
    goals.add(goal);  
    return();

  };

  public func getGoals() : async  [Text] {                            //Function that retur buffer as an array
    return(Buffer.toArray(goals));

  };

};