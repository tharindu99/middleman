import React, { useState } from 'react';
import { Tree,Input } from 'antd';

const { TreeNode } = Tree;
const treeData = [
  {
    title: 'AB',
    key: 'AB',
    children: [
      {
        title: 'AB-0',
        key: 'AB-0',
        children: [
          {
            title: 'AB-AB',
            key: 'AB-AB',
          },
          {
            title: 'AB-0-1',
            key: 'AB-0-1',
          },
          {
            title: 'AB-0-2',
            key: 'AB-0-2',
          },
        ],
      },
      {
        title: 'AB-1',
        key: 'AB-1',
        children: [
          {
            title: 'AB-1-0',
            key: 'AB-1-0',
          },
          {
            title: 'AB-1-1',
            key: 'AB-1-1',
          },
          {
            title: 'AB-1-2',
            key: 'AB-1-2',
          },
        ],
      },
      {
        title: 'AB-2',
        key: 'AB-2',
      },
    ],
  },
  {
    title: 'CDS',
    key: 'CDS',
    children: [
      {
        title: 'CDS1',
        key: 'CDS1',
      },
      {
        title: 'CDS2',
        key: 'CDS2',
      },
      {
        title: 'CDS21',
        key: 'CDS22',
      },
    ],
  },
  {
    title: 'AI',
    key: 'AI',
  },
];

const Testcase_registry = () => {
  const [expandedKeys, setExpandedKeys] = useState();
  const [checkedKeys, setCheckedKeys] = useState();
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  const onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    setCheckedKeys(checkedKeys);
  };

  const onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeys);
  };

  return (
    <div>
        <Input style={{ marginBottom: 8 }} placeholder="Search" />
        <Tree
        checkable
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={treeData}
        />
    </div>
  );
};

export default Testcase_registry