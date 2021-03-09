import * as React from 'react';
import {
  Show,
  ShowButton,
  SimpleShowLayout,
  RichTextField,
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Filter,
  ImageInput,
  ImageField,
} from 'react-admin';

import RichTextInput from 'ra-input-rich-text';

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = (props) => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="body" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <RichTextInput source="body" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="body" />
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="body" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);
