CREATE MIGRATION m16d3sfkqzax5emklsof53vf55tdmji7wmjlcd3diowhxmktfvpjeq
    ONTO initial
{
  CREATE TYPE default::Property;
  CREATE TYPE default::Resource {
      CREATE MULTI LINK properties: default::Property;
      CREATE REQUIRED PROPERTY uri: std::str;
  };
  CREATE TYPE default::Collection {
      CREATE MULTI LINK resources: default::Resource;
  };
  CREATE TYPE default::`Lock`;
  CREATE TYPE default::PSConfig;
  CREATE TYPE default::User;
};
