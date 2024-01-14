export interface SnapshotDocumentos {
  snapshotId: string | undefined;
  snapshotName: string;
  snapshotStatus: string;
  snapshotDate: string;
  documento: {[key: string]: object};
}
