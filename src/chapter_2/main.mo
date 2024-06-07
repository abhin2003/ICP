import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";

actor chapter_2{

    type Member = {
        name: Text;
        age: Nat;
    };

    // Initialize the HashMap
    let members = HashMap.HashMap<Principal, Member>(0, Principal.equal, Principal.hash);

    /// Function to add Member 
    public shared({ caller }) func addMember(member: Member): async Result.Result<(), Text> {
        switch (members.get(caller)) {
            case (null) {
                members.put(caller, member);
                return #ok(());
            };
            case (?oldMember) {
                return #err("Your principal is already related to the member profile");
            };
        };
    };

    /// Function to get Member 
    public shared func getMember(p: Principal): async Result.Result<Member, Text> {
        switch (members.get(p)) {
            case (null) {
                return #err("There is no member associated with this principal: " # Principal.toText(p));
            };
            case (?member) {
                return #ok(member);
            };
        };
    };

    /// Function to update Member
    public shared({ caller }) func updateMember(member: Member): async Result.Result<(), Text> {
        switch (members.get(caller)) {
            case (null) {
                return #err("Member not found with this principal: " # Principal.toText(caller));
            };
            case (?oldMember) {
                members.put(caller, member);
                return #ok(());
            };
        };
    };

    /// Function to get an array of all members 
    public query func getAllMembers(): async [Member] {
        let iterator = members.vals();
        return Iter.toArray(iterator);
    };

    /// Function to get the number of members
    public query func numberOfMembers(): async Nat {
        return members.size();
    };

    /// Function to remove a member
    public shared({ caller }) func removeMember(): async Result.Result<(), Text> {
        switch (members.get(caller)) {
            case (null) {
                return #err("There is no member associated with the caller");
            };
            case (?member) {
                members.delete(caller);
                return #ok(());
            };
        };
    };
};
