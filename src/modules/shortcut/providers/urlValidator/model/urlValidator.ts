export abstract class UrlValidator {
  abstract verify(url: string): Promise<boolean>;
}
