import Text "mo:base/Text";
import Buffer "mo:base/Buffer";

actor manifesto {

  let name : Text = "Motoko Learning";
  var manifesto : Text = " By learning this we will become motoko developers";
  var goals : Buffer.Buffer<Text> = Buffer.Buffer<Text>(0);

  /// Function that return name of DAO
  public query func getName() : async Text {
    name;
  };

  public query func getManifesto() : async Text {
    // Function that return manifesto of DAO
    manifesto;

  };

  /// Function to updates the value of  DAO
  public func setManifesto(newManifesto : Text) : async () {
    manifesto := newManifesto;
    // return ();

  };

  /// Function that adds goal to buffer
  public func addGoals(goal : Text) : async () {
    goals.add(goal);
    // return ();

  };

  /// Function that retur buffer as an array
  public func getGoals() : async [Text] {
    Buffer.toArray(goals)

  };

};
