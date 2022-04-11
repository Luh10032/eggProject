// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDepartment from '../../../app/model/department';
import ExportDevice from '../../../app/model/device';
import ExportIndex from '../../../app/model/index';

declare module 'egg' {
  interface IModel {
    Department: ReturnType<typeof ExportDepartment>;
    Device: ReturnType<typeof ExportDevice>;
    Index: ReturnType<typeof ExportIndex>;
  }
}
